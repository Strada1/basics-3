function resetFields(fields = []) {
  for (let field of fields) {
    field.value = '';
  }
}

export { resetFields };
