FROM bitnami/python:3 as builder
ENV PATH="/app/.venv/bin:${PATH}"
WORKDIR /app

RUN python -m venv .venv

COPY requirements.txt /app
RUN pip install -r requirements.txt

COPY src/ /app

# The production image is constructed with a smaller, production grade
# base image, and your code built in the previous build stage.
FROM bitnami/python:3-prod
ENV PATH="/app/.venv/bin:${PATH}"
WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8000

USER 1001

# command to run on container start
CMD [ "python", "./server.py" ] 
