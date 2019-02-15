import React from 'react'

export default function checkbox({label}) {
  return (
	<div class="checkbox">
		<input type="hidden" name={label} value="0" /> <input name="Vaikas" id={label.split(' ').join('')} type="checkbox" />
		<label for={label.split(' ').join('')}><span class="checkbox-text">{label}</span></label>
	</div>
  )
}
