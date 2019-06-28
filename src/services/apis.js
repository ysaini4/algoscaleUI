import { httpService, httpServiceLogin } from "./httpservices";

export const login = async data => {
  return await httpServiceLogin("POST", "/user/login", data);
};
export const twitter = async data => {
  return await httpService("POST", "/twitter", data, true);
};
