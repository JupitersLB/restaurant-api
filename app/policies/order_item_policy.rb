class OrderItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    true
  end

  def cancel?
    true
  end

  def served?
    @user == 'admin' || @user == 'staff'
  end
end
