declare type GameBetProps = {
    gameId: string;
    homeTeamName: any;
    awayTeamName: any;
    onChange: (data: {
        homeTeamScore: number;
        awayTeamScore: number;
        gameId: string;
    }) => void;
};
export declare const GameBet: ({ gameId, homeTeamName, awayTeamName, onChange, }: GameBetProps) => JSX.Element;
export {};
