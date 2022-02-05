export default function getNameArray(data: Array<any>):string[] {
  return data.map((element: { name: string; }) => element.name);
}
