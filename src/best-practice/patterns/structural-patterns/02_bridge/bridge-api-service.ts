// Абстракция: Логика получения данных
abstract class DataFetcher {
  protected apiService: APIService;

  constructor(apiService: APIService) {
    this.apiService = apiService;
  }

  abstract fetchData(): void;
}

// Интерфейс для API сервисов
interface APIService {
  fetch(): void;
}

// Реализация для REST API
class RestAPIService implements APIService {
  fetch(): void {
    console.log("Fetching data from REST API...");
    // Логика работы с REST API
  }
}

// Реализация для GraphQL
class GraphQLService implements APIService {
  fetch(): void {
    console.log("Fetching data from GraphQL...");
    // Логика работы с GraphQL API
  }
}

// Реализация для WebSocket
class WebSocketService implements APIService {
  fetch(): void {
    console.log("Fetching data from WebSocket...");
  }
}

class UserDataFetcher extends DataFetcher {
  fetchData(): void {
    this.apiService.fetch();
  }
}

// Использование
const restFetcher = new UserDataFetcher(new RestAPIService());
restFetcher.fetchData(); // Выведет: Fetching data from REST API...

const graphqlFetcher = new UserDataFetcher(new GraphQLService());
graphqlFetcher.fetchData(); // Выведет: Fetching data from GraphQL...

const websocketFetcher = new UserDataFetcher(new WebSocketService());
websocketFetcher.fetchData(); // Выведет: Fetching data from WebSocket...
