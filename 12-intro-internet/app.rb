require 'pry'

class App
  def call(environment_hash)
    if environment_hash["HTTP_BOO"] == 'ahhh'
      status_code = 400
      header = {}
      body = ['i scared'] # or {}
    else
      status_code = 200
      header = {}
      body = ['i not scared'] # or {}
    end

    return [status_code, header, body]
  end
end
