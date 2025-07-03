# Statrey

## Project Overview

Statrey is a **Next.js** application designed to provide comprehensive information for **Teamfight Tactics (TFT) Set 14**. It leverages third-party APIs to deliver real-time game data, offers a robust team planner, and displays summarized past match results using the Riot Games API. Built with the idea of **clean architecture design** by Robert C. Martin in mind, Statrey aims to offer a smooth and intuitive user experience for TFT enthusiasts.

## Features

- **TFT Set 14 Information**: Access up-to-date data for TFT Set 14, including champions, items, traits, and more, sourced from external APIs.
- **Team Planner**: A dedicated tool to help users strategize and build optimal team compositions, allowing for experimentation with various champion and item combinations.
- **Past Match Results Summary**: View a concise summary of your previous TFT matches, pulling data directly from the Riot Games API to help analyze performance and identify trends.
- **Clean Architecture**: Designed with maintainability, scalability, and testability in mind, ensuring a robust and organized codebase.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and static web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS** (or similar): For rapid UI development and responsive design.
- **Third-Party TFT Data API**: (Specify if known, e.g., TFTactics API, Mobalytics API, etc. - *Placeholder for now*)
- **Riot Games API**: For fetching player match history and game data.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/statrey.git
cd statrey
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Environment Variables

This project requires environment variables for API keys. Create a `.env.local` file in the root of the project and add the following:

```env
# Riot Games API Key
NEXT_PUBLIC_RIOT_API_KEY=your_riot_games_api_key_here
DEBUG=True
NODE_ENV=development
```

You can obtain a Riot Games API key from the [Riot Games Developer Portal](https://developer.riotgames.com/).  
The TFT data API key will depend on which specific API you are using.

### Running the Application

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
