FROM python:3.14-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

RUN addgroup --system django \
    && adduser --system --ingroup django django

COPY requirements.txt ./

RUN python -m pip install --upgrade pip \
    && python -m pip install -r requirements.txt

COPY . .

RUN chown -R django:django /app

USER django

EXPOSE 8000

CMD [
    "gunicorn",
    "config.wsgi:application",
    "--bind",
    "0.0.0.0:8000",
    "--workers",
    "2",
    "--timeout",
    "60",
    "--access-logfile",
    "-",
    "--error-logfile",
    "-"
]