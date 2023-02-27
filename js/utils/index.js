 export function resetFields(fields = {}) {
  for (let field in fields) {
    fields[field] = '';
  }
 }
