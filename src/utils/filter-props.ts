type FilterPropsFunction = (props: any) => any;

const filterProps: FilterPropsFunction = ({ ...rest }) => rest;

export default filterProps;