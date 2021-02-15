export let formData = (rawData: any) => {
  let form = new FormData();
  Object.keys(rawData).forEach((key) => {
    if (rawData[key]) {
      if (typeof rawData[key] === 'object') {
        Object.entries(rawData[key]).forEach(([, value], index) => {
          if (typeof value === 'object') {
            Object.entries(value).forEach(([_key, _value], _index) => {
              form.append(`${key}[${_key}][${index}]`, _value);
            });
          }
        });
      } else {
        form.append(key, rawData[key]);
      }
    }
  });
  return form;
};
