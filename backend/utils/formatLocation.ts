export const formatLocation = (location) => {
    return {
        id: location.id,
        name: location.name,
        type: location.type,
        noOfResidents: location.residents.length,
        dimension: location.dimension
    }
}