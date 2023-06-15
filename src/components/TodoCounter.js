import "../css/TodoCounter.css";

function TodoCounter({ total, completed }) {
    const Felicitaciones = [
        "Felicidades! Haz completado tus tareas 😁",
        "Vaya, Hoy ha sido un dia productivo",
        "Te has ganado un descanso de 25 minutos ✋",
        "Completaste todos tus pendientes 😎",
        "No tienes Pendientes",
        "Sin tareas el dia de hoy",
    ];
    const randomIndex = Math.floor(Math.random() * Felicitaciones.length);

    return (
            <h2 className="h2-title">
            {total === completed && total !== 0
                ? `${Felicitaciones[randomIndex]}`
                : `Has completado ${completed} de ${total} TODOs`}
        </h2>
    );
}

export { TodoCounter };
