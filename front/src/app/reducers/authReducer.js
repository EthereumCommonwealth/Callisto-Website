export default function authReducer(state = {}, { type, payload }) {
  switch (type) {
    case 'SET-CURRENT-USER':
      return payload;
    case 'UNSET-CURRENT-USER':
      return {}
    default:
      return state;
  }
}
