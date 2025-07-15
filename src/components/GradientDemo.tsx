import React from 'react';
import GradientHeader from '@/components/ui/GradientHeader';
import GradientCard from '@/components/ui/GradientCard';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Users, Phone, MapPin, Clock } from 'lucide-react';

const GradientDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--neutral-gray-100)] to-white">
      {/* Import colors CSS */}
      <link rel="stylesheet" href="/src/styles/colors.css" />
      
      {/* Hero Header */}
      <GradientHeader
        title="Hospital San Miguel"
        subtitle="Excelencia en Atención Médica • Putumayo, Ecuador"
        variant="hero"
        size="xl"
        className="mb-16"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="bg-white text-[var(--primary-red)] hover:bg-white/90 font-semibold px-8 py-3">
            Servicios Médicos
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
            Contacto
          </Button>
        </div>
      </GradientHeader>

      <div className="container mx-auto px-4 space-y-16">
        {/* Services Section */}
        <section>
          <GradientHeader
            title="Nuestros Servicios"
            subtitle="Atención médica integral las 24 horas"
            variant="medical"
            size="lg"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradientCard
              title="Medicina General"
              subtitle="Consultas médicas generales y chequeos preventivos"
              variant="primary"
              size="md"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--primary-red)]/10 rounded-full mb-4">
                <Stethoscope className="w-8 h-8 text-[var(--primary-red)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                Atención médica de calidad con profesionales especializados disponibles todo el día.
              </p>
            </GradientCard>

            <GradientCard
              title="Emergencias"
              subtitle="Atención de urgencias médicas 24/7"
              variant="emergency"
              size="md"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--primary-red)]/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-[var(--primary-red-dark)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                Servicio de emergencias disponible las 24 horas con equipo médico especializado.
              </p>
            </GradientCard>

            <GradientCard
              title="Salud Comunitaria"
              subtitle="Programas de prevención y bienestar"
              variant="accent"
              size="md"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--accent-green)]/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-[var(--accent-green-dark)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                Programas de salud preventiva y educación sanitaria para la comunidad.
              </p>
            </GradientCard>
          </div>
        </section>

        {/* Departments Section */}
        <section>
          <GradientHeader
            title="Departamentos"
            subtitle="Especialidades médicas disponibles"
            variant="secondary"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GradientCard
              title="Pediatría"
              subtitle="Cuidado especializado para niños"
              variant="medical"
              size="lg"
            >
              <ul className="space-y-2 text-sm text-[var(--neutral-gray-600)]">
                <li>• Consultas pediátricas</li>
                <li>• Vacunación infantil</li>
                <li>• Control de crecimiento</li>
                <li>• Tratamiento de enfermedades infantiles</li>
              </ul>
            </GradientCard>

            <GradientCard
              title="Ginecología"
              subtitle="Salud integral de la mujer"
              variant="secondary"
              size="lg"
            >
              <ul className="space-y-2 text-sm text-[var(--neutral-gray-600)]">
                <li>• Control prenatal</li>
                <li>• Planificación familiar</li>
                <li>• Consultas ginecológicas</li>
                <li>• Atención de partos</li>
              </ul>
            </GradientCard>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <GradientHeader
            title="Contacto"
            subtitle="Estamos aquí para ayudarte"
            variant="primary"
            size="md"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GradientCard
              title="Ubicación"
              variant="neutral"
              size="md"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[var(--primary-red)]/10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-[var(--primary-red)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                Puerto El Carmen<br />
                Putumayo, Ecuador
              </p>
            </GradientCard>

            <GradientCard
              title="Teléfono"
              variant="neutral"
              size="md"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[var(--secondary-teal)]/10 rounded-full mb-4">
                <Phone className="w-6 h-6 text-[var(--secondary-teal-dark)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                +593 XX XXX XXXX<br />
                Línea de emergencias
              </p>
            </GradientCard>

            <GradientCard
              title="Horarios"
              variant="neutral"
              size="md"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[var(--accent-green)]/10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[var(--accent-green-dark)]" />
              </div>
              <p className="text-[var(--neutral-gray-600)] text-sm">
                24 horas<br />
                Todos los días
              </p>
            </GradientCard>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <GradientCard
              variant="primary"
              size="sm"
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary-red-dark)] mb-2">500+</div>
              <p className="text-[var(--neutral-gray-600)] text-sm">Pacientes atendidos</p>
            </GradientCard>

            <GradientCard
              variant="secondary"
              size="sm"
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--secondary-teal-dark)] mb-2">24/7</div>
              <p className="text-[var(--neutral-gray-600)] text-sm">Servicio continuo</p>
            </GradientCard>

            <GradientCard
              variant="accent"
              size="sm"
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--accent-green-dark)] mb-2">10+</div>
              <p className="text-[var(--neutral-gray-600)] text-sm">Especialidades</p>
            </GradientCard>

            <GradientCard
              variant="medical"
              size="sm"
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary-red-dark)] mb-2">15+</div>
              <p className="text-[var(--neutral-gray-600)] text-sm">Profesionales</p>
            </GradientCard>
          </div>
        </section>

        {/* Color Palette Display */}
        <section className="py-16 border-t border-[var(--neutral-gray-200)]">
          <h2 className="text-2xl font-bold text-center mb-8 text-[var(--neutral-gray-800)]">
            Paleta de Colores Hospital San Miguel
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* Primary Red Shades */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-red)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Primary Red<br />#EE2D2E</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-red-light)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Light<br />#F55859</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--primary-red-dark)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Dark<br />#D11B1C</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--secondary-teal)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Teal<br />#2EE8EE</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--accent-green)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Green<br />#2EEE2D</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--neutral-gray-600)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">Gray<br />#6C757D</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--neutral-white)] border border-[var(--neutral-gray-300)] rounded-lg mx-auto mb-2 shadow-lg"></div>
              <p className="text-xs text-[var(--neutral-gray-600)]">White<br />#FFFFFF</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GradientDemo;
