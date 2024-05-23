export function getTodayDate() {
  return new Date().toISOString().slice(0, 10);
}

export function properData(formData, user_id) {
  return {
    ...formData,
    date: getTodayDate(),
    userId:user_id,
    // :user_id.toString(),
  };
}
