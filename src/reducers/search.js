const search = (state='Family', action) =>
{
    switch (action.type)
    {
        case 'SEACRH':
            return action.data;
        default:
            return state;
    }
}
export default search