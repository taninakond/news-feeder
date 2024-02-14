export default function formatDate(timestamp = null) {
    const currentDate = new Date();

    if (!timestamp) {
        return currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    const inputDate = new Date(timestamp);

    const timeDifference = currentDate - inputDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (secondsDifference < 60) {
        return 'Just now';
    } else if (minutesDifference < 60) {
        return `${minutesDifference} minute${
            minutesDifference === 1 ? '' : 's'
        } ago`;
    } else if (hoursDifference < 24) {
        return `${hoursDifference} hour${hoursDifference === 1 ? '' : 's'} ago`;
    } else if (daysDifference === 1) {
        return 'Yesterday';
    } else {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const formattedDate = `${inputDate.getDate()} ${
            months[inputDate.getMonth()]
        } ${inputDate.getFullYear()}`;
        return formattedDate;
    }
}
