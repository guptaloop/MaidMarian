# == Schema Information
#
# Table name: stocks
#
#  id            :bigint           not null, primary key
#  symbol        :string           not null
#  name          :string           not null
#  about         :text             not null
#  ceo           :string           not null
#  founded       :string           not null
#  hq            :string           not null
#  industry      :string           not null
#  exchange      :string           not null
#  products      :string           not null
#  employees     :integer          not null
#  valuation     :integer          not null
#  mkt_price     :float            not null
#  youtube_query :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null


class Stock < ApplicationRecord
	validates :name, :symbol, presence: true
  validates :symbol, uniqueness: true

end