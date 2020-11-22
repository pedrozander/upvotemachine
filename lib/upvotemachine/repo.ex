defmodule Upvotemachine.Repo do
  use Ecto.Repo,
    otp_app: :upvotemachine,
    adapter: Ecto.Adapters.Postgres
end
