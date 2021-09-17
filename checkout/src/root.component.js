export default function Root(props) {
  console.log(props)
  return <section>{props.name} {props.inc} is mounted!</section>;
}
