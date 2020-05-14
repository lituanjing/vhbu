let id = parseInt(window.localStorage.getItem('vhbu__idMax') || '0');
const createId = ():number => {
  id += 1;
  window.localStorage.setItem('vhbu__idMax', JSON.stringify(id));
  return id;
};

export {createId};
