function cloneDeep(aObject) {
  if (!aObject) {
    return aObject;
  }

  let v;
  const bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === 'object') ? cloneDeep(v) : v;
  }

  return bObject;
}

export default cloneDeep;
