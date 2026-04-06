# Sales Analytics Dashboard

Профессиональная аналитическая панель для визуализации ключевых метрик продаж.  
Разработана с использованием современного стека React + TypeScript и архитектурных best practices.

[**→ Демо на GitHub Pages**](https://nirmong.github.io/sales-dashboard/)

![Sales Dashboard Screenshot](./screenshot.png)

> 💡 _Скриншот выше можно обновить после добавления изображения (см. ниже)_

## 🔧 Технологии

- **Frontend**: React 19, TypeScript, Vite
- **Управление состоянием**: `@tanstack/react-query`
- **Визуализация данных**: Recharts (на основе D3)
- **Дата и форматирование**: date-fns
- **Архитектура**: Feature-Sliced Design (FSD)
- **Тестирование**: Подготовка к unit-тестам (Zod, утилиты)
- **Деплой**: GitHub Pages

## 🌟 Особенности

- 📊 Интерактивные графики выручки по дням
- 🗓️ Фильтрация по периоду: 7 / 30 / 90 дней или кастомный диапазон
- 📈 Агрегированные метрики в реальном времени
- 🌗 Поддержка светлой темы (готова к расширению до dark mode)
- 📱 Адаптивный дизайн
- 🧪 Чистая архитектура: разделение на `features`, `entities`, `shared`
- ✅ Полная типобезопасность от API до UI

## ▶️ Запуск локально

```bash
git clone https://github.com/nirmong/sales-dashboard.git
cd sales-dashboard
npm install
npm run dev
```

Откроется по адресу: http://localhost:5174

## 📦 Сборка и деплой

```bash
npm run build    # собирает в папку dist/
npm run deploy   # публикует на GitHub Pages
```

## 📂 Архитектура (Feature-Sliced Design)

```
src/
├── app/               # корневые провайдеры
├── pages/             # страницы приложения
├── features/          # функциональные модули (фильтры, графики)
├── entities/          # бизнес-сущности (продажи)
├── shared/            # переиспользуемые компоненты и утилиты
└── types/             # глобальные типы
```

## 📝 Автор

Никита Зубенко — Senior Frontend Developer

[**GitHub**](https://github.com/nirmong)

Этот проект создан для демонстрации подхода к разработке масштабируемых B2B-приложений.
