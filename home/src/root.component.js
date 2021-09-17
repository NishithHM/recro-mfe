export default function Root(props) {
  console.log(props)
  return <section>{props.name} is mounted!</section>;
}
