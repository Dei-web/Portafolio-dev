const formatDatetime = (datetime) => {
    const d = new Date(datetime);
    return d.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'short',
    });
};

export default formatDatetime;