const cliApi = '/cli-api';

const getPatient = async () => {
  const response = await fetch(`${cliApi}/patient`);
  const result = await response.json();
  if (response.ok) {
    return result;
  }

  throw new Error(result);
};

export const SchedulerProxy = {
  getPatient,
};
