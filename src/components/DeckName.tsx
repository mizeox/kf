interface DeckNameProps {
    name: string;
}

const DeckName = ({name} : DeckNameProps) => {
    return (
        <div>{name}</div>
    )
}

export default DeckName