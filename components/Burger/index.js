import styles from './style.module.scss';

export default function ({ openMenu }) {
    return (
        <div onClick={() => { openMenu() }} className='absolute right-3 md:hidden top-14'>
            <svg width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
            </svg>
            <svg width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
            </svg>
            <svg width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
            </svg>

        </div>
    )
}