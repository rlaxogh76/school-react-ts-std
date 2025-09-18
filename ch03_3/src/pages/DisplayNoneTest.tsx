import {Title} from '../components'
export default function CopyMe() {
  return (
    <section>
      <Title>DisplayNoneTest</Title>
      <div className="mt-4">
        <p className="visible">Visibility: visible</p>
        <p className="invisible">Visibility: invisible</p>
        <p className="hidden">Display: none</p>
      </div>
    </section>
  )
}
