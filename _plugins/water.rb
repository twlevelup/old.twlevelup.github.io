module Liquid
  class WaterBlock < Liquid::Block
    alias :super_render :render

    def initialize(tag_name, identifier, tokens)
      super
    end

    def render(context)
      context.environments.first["page"]["water"] = super_render(context)
      ''
    end
  end
end

Liquid::Template.register_tag('water', Liquid::WaterBlock)