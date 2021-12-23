
export function slugger (...strs)  {
    return strs.map((str) =>str.trim().replace(" ", "-")).join("-").replaceAll(" ","");
}
