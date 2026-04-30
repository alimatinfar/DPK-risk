import withSeparator from "../separator/withSeparator";


type Props = {
  event: any;
}

function setSeparator({event}:Props) {
  event.target.value = withSeparator(event.target.value);
}

export default setSeparator