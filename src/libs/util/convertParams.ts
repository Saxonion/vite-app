
/**
 * convert url params into obj
 *
 * @param {String} params
 * @return {Object}
 */
export const convertParams:object = (params: string) => {
  const url = params.substr(1);
  const arr = url.split("&");
  let obj:any;
  arr.forEach((item) => {
    const data = item.split("=");
    obj[data[0]] = data[1];
  });
  return obj;
};