import React, { useEffect } from 'react';
import { TonConnectUI } from '@tonconnect/ui';
import '@tonconnect/sdk'


const App = () => {
    useEffect(() => {
        // Инициализация TON Connect UI
        const tonConnectUI = new TonConnectUI({
            manifestUrl: 'https://appcreator-sudo-tonlottery-9f43.twc1.net/tonconnect-manifest.json', // Замените на ваш URL манифеста
        });

        // Встраивание кнопки в интерфейс
        tonConnectUI.renderButton({
            buttonRootId: 'ton-connect-button', // ID элемента для рендера кнопки
        });

        // Опционально: подписка на события
        tonConnectUI.onStatusChange((status) => {
            console.log('TON Connect status:', status);
        });
    }, []);

    return (
        <div>
            <h1>TON Connect UI Example</h1>
            <div id="ton-connect-button"></div>
        </div>
    );
};

export default App;
