FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update
RUN apt install -y nodejs
RUN apt upgrade

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update
RUN apt install -y nodejs
RUN apt upgrade
WORKDIR /src
COPY ["InternationalNumbers.WebApp.csproj", "InternationalNumbers.WebApp/"]
RUN dotnet restore "InternationalNumbers.WebApp/InternationalNumbers.WebApp.csproj"
WORKDIR "/src/InternationalNumbers.WebApp"
COPY . .
RUN dotnet build "InternationalNumbers.WebApp.csproj" -c Release -o /app/build

FROM build AS publish
WORKDIR "/src/InternationalNumbers.WebApp"
RUN dotnet publish "InternationalNumbers.WebApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["dotnet", "InternationalNumbers.WebApp.dll"]
