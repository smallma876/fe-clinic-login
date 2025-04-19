import CardMenu from "@/shared/components/CardMenu/CardMenu";

const ServiceType = () => {
  const onClickBySpecialty = () => {
    console.log('onClickBySpecialty');
  };

  const onClickByDoctor = () => {
    console.log('onClickByDoctor');
  };

  const onClickDoctorAtHome = () => {
    console.log('onClickDoctorAtHome');
  };

  return (
    <div>
      <h3>Como podemos ayudarte?</h3>
      <div>
        <h3>Citas medicas</h3>
        <span>Agenda una cita con el mejor staff medico altamente capacitado</span>
        <div>
          <CardMenu label="Por Especialidad" onClick={onClickBySpecialty} />
          <CardMenu label="Por Doctor" onClick={onClickByDoctor} />
          <CardMenu label="Medico a domicilio" onClick={onClickDoctorAtHome} />
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
