const Node = (value = null) => {
  return {
    value,
    next: null,
    updateValue: (updatedValue) => {
      this.value = updatedValue;
    },
  };
};

export { Node };
