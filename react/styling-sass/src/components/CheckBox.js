import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

console.log(styles);

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
    const color = 'blue';
    return (
        <div className={cx('checkbox', color)}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={styles.icon}>
                    {checked ? <MdCheckBox className={styles.checked} /> : <MdCheckBoxOutlineBlank />}
                </div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;
