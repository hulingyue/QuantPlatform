import { ref, onMounted } from 'vue';

export function useWebSocket(url: string, onMessage: (data: any) => void) {
    const websocketState = ref('disconnected');
    let socket: WebSocket;

    onMounted(() => {
        console.log(url);
        socket = new WebSocket(url);

        socket.onopen = () => {
            websocketState.value = 'connected';
        };

        socket.onclose = () => {
            websocketState.value = 'disconnected';
        };

        socket.onmessage = (event) => {
            onMessage(event.data);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    });
    
    return {
        websocketState
    };
}
