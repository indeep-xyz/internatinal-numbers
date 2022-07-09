#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim AS base
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update
RUN apt install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update
RUN apt install -y nodejs
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
