import intances from "./instance";

export const upload = async (data) => await intances.post('/upload', data)