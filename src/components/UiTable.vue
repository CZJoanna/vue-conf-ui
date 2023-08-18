<template>
    <table>
			<thead>
				<th v-for="field in fields" :key="field.label">
					{{ field.label }}
				</th>
			</thead>
			<tbody>
				<template v-for="field in fields" :key="field.label">
					<tr v-for="row in rows" :key="row.name">
						<td>
							{{ row[field.value] }}
						</td>
					</tr>
				</template>
			</tbody>
    </table>
</template>

<script setup>
defineProps({
	fields: {
		type: Array,
		default: () => ([])
	},
	rows: {
		type: Array,
		default: () => ([])
	}
})
</script>