import styled from '@emotion/styled'

interface RInputTextProps {
	placeholder: string
	value: string
	onChange: (newName: string) => void
	style?: 'title' | 'simple'
	autoFocus?: boolean
}

export function InputText({
	placeholder,
	value,
	onChange,
	style = 'simple',
	autoFocus = false
}: RInputTextProps) {

	const genericStyle = style === 'simple' ? '' : `
		font-size: 1.2rem;
		font-weight: bold;
	`

	const changeInput = (event: any) => onChange(event.target.value)

	return (
		<>
			<Label htmlFor='groupName'>Name</Label>
			<Input
				genericStyles={genericStyle}
				type='text'
				name='name'
				id='groupName'
				value={value}
				onChange={changeInput}
				placeholder={placeholder}
				autoFocus={autoFocus}
			/>
		</>
	)
}

interface GenericStylesProps {
	genericStyles: string
}

const Label = styled.label`
	display: none;
`

const Input = styled.input<GenericStylesProps>`
	border: none;
	border-bottom: 1px solid #323232;
	padding-left: 0;
	padding-right: 0;
	height: auto;
	${(props: GenericStylesProps) => props.genericStyles}
`
