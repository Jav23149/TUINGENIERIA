import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { nombre, telefono, email, mensaje, servicio, origen } = body;

    // Validar campos obligatorios
    if (!nombre || !telefono) {
      return Response.json({ error: 'Nombre y teléfono son obligatorios' }, { status: 400 });
    }

    // Validar enum de servicio
    const serviciosValidos = ['climatizacion', 'reformas', 'fotovoltaica', 'general'];
    const servicioFinal = serviciosValidos.includes(servicio) ? servicio : 'general';

    // Crear el Lead con service role (visitantes anónimos pueden enviar)
    const lead = await base44.asServiceRole.entities.Lead.create({
      nombre: String(nombre).slice(0, 200),
      telefono: String(telefono).slice(0, 50),
      email: email ? String(email).slice(0, 200) : '',
      mensaje: mensaje ? String(mensaje).slice(0, 2000) : '',
      servicio: servicioFinal,
      origen: origen ? String(origen).slice(0, 100) : 'Web',
    });

    // Enviar email de notificación al negocio vía Gmail (desde la propia cuenta)
    try {
      const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');
      const subject = `Nuevo lead: ${lead.nombre} - ${lead.servicio}`;
      const textBody = [
        "Nuevo formulario recibido desde la web",
        "",
        `Nombre: ${lead.nombre}`,
        `Telefono: ${lead.telefono}`,
        `Email: ${lead.email || '—'}`,
        `Servicio: ${lead.servicio}`,
        `Origen: ${lead.origen || '—'}`,
        `Mensaje: ${lead.mensaje || '—'}`,
      ].join("\n");
      const encodeHeader = (s) => /^[\x20-\x7E]*$/.test(s) ? s : `=?UTF-8?B?${btoa(unescape(encodeURIComponent(s)))}?=`;
      const utf8ToBase64 = (s) => btoa(unescape(encodeURIComponent(s)));
      const mimeMessage = [
        `From: TU INGENIERIA <tuingenieriasl@gmail.com>`,
        `To: tuingenieriasl@gmail.com`,
        `Subject: ${encodeHeader(subject)}`,
        `MIME-Version: 1.0`,
        `Content-Type: text/plain; charset=UTF-8`,
        `Content-Transfer-Encoding: base64`,
        ``,
        utf8ToBase64(textBody),
      ].join("\r\n");
      const raw = btoa(mimeMessage).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw }),
        signal: AbortSignal.timeout(15000),
      });
    } catch (emailErr) {
      // El lead se guardó aunque el email falle
      console.error('Error enviando email:', emailErr.message);
    }

    return Response.json({ success: true, leadId: lead.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}