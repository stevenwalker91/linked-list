const Node = (value = null, next = null) => {
  return {
    value,
    next,
    updateValue: (updatedValue) => {
      this.value = updatedValue;
    },
  };
};

export { Node };
