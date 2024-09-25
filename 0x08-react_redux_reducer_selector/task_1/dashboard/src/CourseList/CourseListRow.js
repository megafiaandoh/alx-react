import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'


const CourseListRow = ({isHeader=false, textFirstCell, textSecondCell=null}) => {

    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e) {
        setIsChecked(e.target.checked)
    }

  return (
    <tr className={isHeader ? css(styles.headerStyle) : css(styles.trStyle, isChecked && styles.rowChecked)}>
        {
            isHeader ? (
                <>
                {
                    textSecondCell ? (
                        <>
                            <th className={css(styles.thStyle)}>{textFirstCell}</th>
                            <th className={css(styles.thStyle)}>{textSecondCell}</th>
                        </>
                        ) : (
                            <th colSpan="2" className={{...css(styles.thStyle), ...css(styles.withColSpan2)}}>{textFirstCell}</th>
                    )
                }
                </>
            ) : (
                <>
                <td><input type="checkbox" checked={isChecked} onChange={handleChange}/>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
            )
        }
    </tr>
  )
}

export default CourseListRow

// aphrodite styles
const styles = StyleSheet.create({
    headerStyle: {
        background: '#deb5b545',
    },
    trStyle: {
        background: '#f5f5f5ab'
    },
    thStyle: {
        borderBottom: '2px solid #b7b2b2',
        textAlign: 'left'
    },
    withColSpan2: {
        textAlign: 'center'
    },
    rowChecked: {
        background: '#e6e4e4'
    }
})
