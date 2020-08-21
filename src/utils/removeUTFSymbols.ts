export default (text: string) => {
  return text.replace('ã', 'a').replace('õ', 'o').replace('ê', 'e')
}