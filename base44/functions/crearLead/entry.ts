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

    // Enviar email de notificación al negocio
    const telefonoLimpio = String(telefono).replace(/[^0-9]/g, '');
    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        template_name: 'NuevoLead',
        to: 'tuingenieriasl@gmail.com',
        variables: {
          nombre: lead.nombre,
          telefono: lead.telefono,
          email: lead.email || '—',
          servicio: lead.servicio,
          origen: lead.origen || '—',
          mensaje: lead.mensaje || '—',
          telefono_limpio: telefonoLimpio,
        },
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