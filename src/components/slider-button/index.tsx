import './styles.css'
export function SliderButton(props: { children: string }) {
    return <button className='slider-button'>{props.children}</button>
}